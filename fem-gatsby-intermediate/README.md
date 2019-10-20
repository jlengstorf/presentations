# Build Your First Portfolio Site With Gatsby

Showcasing your work on the internet is often the first impression you’ll make when applying for jobs, attracting clients, or growing your network. It’s extremely important that your site makes a good first impression. But _who has the time_ to build a stand-out portfolio?

In this session, you’ll learn how you can create a high-performance portfolio site in minutes using Gatsby. Source your content from local files or a headless CMS and get something published _fast_ so your site makes a great first impression — without spending weeks building it.

## What you’ll learn

-   Create a new Gatsby site from scratch
-   Pull portfolio data from local files
-   Pull portfolio data from a headless CMS
-   Optimize image performance for blazing fast load times

## Code

-   Create a new Gatsby site from the hello-world starter

    ```sh
    npx gatsby new gatsby-portfolio gatsbyjs/gatsby-starter-hello-world
    ```

-   Create `gatsby-config.js`

    ```sh
    touch gatsby-config.js
    ```

-   Add the filesystem source and the JSON transformer to make portfolio data available in queries.
    ```sh
    yarn add gatsby-source-filesystem gatsby-transformer-json
    ```

    -   Configure the plugins to load the JSON data

        ```js
        module.exports = {
          plugins: [
            {
              resolve: 'gatsby-source-filesystem',
              options: {
                name: 'project',
                path: './data'
              }
            },
            'gatsby-transformer-json'
          ]
        };
        ```

    -   Look at the GraphQL output to see what was added

        ```graphql
        {
          allProjectsJson {
            edges {
              node {
                title
                url
                slug
                description
                image {
                  publicURL
                }
              }
            }
          }
        }
        ```
    
    -   This is good, but the images aren’t optimized. Let’s fix that!

-   Add the image optimization plugins.

    ```sh
    yarn add gatsby-plugin-sharp gatsby-transformer-sharp gatsby-image
    ```

    -   Update `gatsby-config.js` with the new plugins. **NOTE:** Sharp needs to come _before_ the filesystem plugin in the plugin order.

        ```diff
          module.exports = {
            plugins: [
        +     'gatsby-plugin-sharp',
        +     'gatsby-transformer-sharp',
              {
                resolve: 'gatsby-source-filesystem',
                options: {
                  name: 'project',
                  path: './data'
                }
              },
              'gatsby-transformer-json'
            ]
          };
        ```
    
    -   Check out the new fields in GraphQL.

        ```graphql
        {
	        allProjectsJson {
            edges {
              node {
                title
                url
                slug
                description
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
        ```

-   Create a layout component.

    ```jsx
    import React from 'react';
    import { Link } from 'gatsby';
    
    import './layout.css';
    
    const Layout = ({ children }) => (
      <React.Fragment>
        <header className="header">
          <Link to="/">My Portfolio</Link>
        </header>
        <main className="content">{children}</main>
      </React.Fragment>
    );
    
    export default Layout;
    ```

-   Create a ProjectPreview component.

    ```jsx
    import React from 'react';
    import { Link } from 'gatsby';
    import Image from 'gatsby-image';
    
    const ProjectPreview = ({ title, description, slug, imageData }) => {
      <div className="project-preview">
        <Link to={`/${slug}/`}>
          <Image fluid={imageData} alt={title} />
        </Link>
        <h2>
          <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <p>{description}</p>
        <p>
          <Link to={`/${slug}/`}>View this project &rarr;</Link>
        </p>
      </div>;
    };
    
    export default ProjectPreview;
    ```

-   Build the home page.
    
    ```jsx
    import React from 'react';
    import { graphql, useStaticQuery } from 'gatsby';
    import Layout from '../components/layout';
    import ProjectPreview from '../components/project-preview';
    
    const Home = () => {
      const data = useStaticQuery(graphql`
        {
          allProjectsJson {
            edges {
              node {
                title
                slug
                description
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `);
      const projects = data.allProjectsJson.edges;
    
      return (
        <Layout>
          {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;
    
            return (
              <ProjectPreview
                title={title}
                description={description}
                slug={slug}
                imageData={imageData}
              />
            );
          })}
        </Layout>
      );
    };
    
    export default Home;
    ```

-   Build a Project component.

    ```jsx
    import React from 'react';
    import { Link } from 'gatsby';
    import Image from 'gatsby-image';
    
    const Project = ({ title, description, url, imageData }) => (
      <div className="project">
        <h1>{title}</h1>
        <Image fluid={imageData} alt={title} />
        <p>{description}</p>
        <p>
          <a href={url}>View this project online &rarr;</a>
        </p>
        <p>
          <Link to="/">&larr; back to all projects</Link>
        </p>
      </div>
    );
    
    export default Project;
    ```

-   Build a project template.

    ```jsx
    import React from 'react';
    import { graphql } from 'gatsby';
    import Layout from '../components/layout';
    import Project from '../components/project';
    
    export const query = graphql`
      query($slug: String!) {
        projectsJson(slug: { eq: $slug }) {
          title
          description
          url
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `;
    
    const ProjectTemplate = ({ data }) => {
      const project = data.projectsJson;
      const title = project.title;
      const description = project.description;
      const imageData = project.image.childImageSharp.fluid;
      const url = project.url;
    
      return (
        <Layout>
          <Project
            title={title}
            description={description}
            imageData={imageData}
            url={url}
          />
        </Layout>
      );
    };
    
    export default ProjectTemplate;
    ```

-   Write the gatsby-node.js setup to create the project pages.

    ```js
    exports.createPages = async ({ actions, graphql, reporter }) => {
      const result = await graphql(`
        {
          allProjectsJson {
            edges {
              node {
                slug
              }
            }
          }
        }
      `);
    
      if (result.error) {
        reporter.panic('There was a problem loading your projects!');
        return;
      }
    
      const projects = result.data.allProjectsJson.edges;
    
      projects.forEach(({ node: project }) => {
        const slug = project.slug;
    
        actions.createPage({
          path: `/${slug}/`,
          component: require.resolve('./src/templates/project.js'),
          context: { slug }
        });
      });
    };
    ```

-   Stop and restart the server to see the generated pages.

## Switch to Sanity

After a while, you might decide that JSON is too cumbersome and you’d prefer a UI-based admin for managing your content.

Let’s switch to using Sanity!

-   Install the Sanity Gatsby plugin.

    ```sh
    yarn add gatsby-source-sanity
    ```

-   Update `gatsby-config.js` to use Sanity instead of JSON

    ```diff
      module.exports = {
        plugins: [
    -     'gatsby-plugin-sharp',
    -     'gatsby-transformer-sharp',
    -     {
    -       resolve: 'gatsby-source-filesystem',
    -       options: {
    -         name: 'project',
    -         path: './data'
    -       }
    -     },
    -     'gatsby-transformer-json'
    +     {
    +       resolve: 'gatsby-source-sanity',
    +       options: {
    +         projectId: '2y3275eg',
    +         dataset: 'production',
    +         watchMode: true
    +       }
    +     }
        ]
      };
    ```

-   Check out the new data in GraphQL

    ```sh
    yarn develop
    ```

    **NOTE:** Since we haven’t updated the site code, we’ll see a bunch of errors. That’s okay — we just need to see the GraphQL Playground for now.

    ```graphql
    {
	  allSanityProject {
        edges {
          node {
            title
            description
            url
            slug {
              current
            }
            image {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    ```

-   Update the home page

    ```diff
      import React from 'react';
      import { graphql, useStaticQuery } from 'gatsby';
      import Layout from '../components/layout';
      import ProjectPreview from '../components/project-preview';
      
      const Home = () => {
        const data = useStaticQuery(graphql`
          {
    -       allProjectsJson {
    +       allSanityProject {
              edges {
                node {
                  title
    -             slug
    +             slug {
    +               current
    +             }
                  description
                  image {
    -               childImageSharp {
    +               asset {
                      fluid {
    -                   ...GatsbyImageSharpFluid
    +                   ...GatsbySanityImageFluid
                      }
                    }
                  }
                }
              }
            }
          }
        `);
    -   const projects = data.allProjectsJson.edges;
    +   const projects = data.allSanityProject.edges;
      
        return (
          <Layout>
            {projects.map(({ node: project }) => {
              const title = project.title;
              const description = project.description;
    -         const slug = project.slug;
    -         const imageData = project.image.childImageSharp.fluid;
    +         const slug = project.slug.current;
    +         const imageData = project.image.asset.fluid;
      
              return (
                <ProjectPreview
                  title={title}
                  description={description}
                  slug={slug}
                  imageData={imageData}
                />
              );
            })}
          </Layout>
        );
      };
      
      export default Home;
    ```

-   Update the project template

    ```diff
      import React from 'react';
      import { graphql } from 'gatsby';
      import Layout from '../components/layout';
      import Project from '../components/project';
      
      export const query = graphql`
        query($slug: String!) {
    -     projectsJson(slug: { eq: $slug }) {
    +     sanityProject(slug: { current: {eq: $slug }}) {
            title
            description
            url
            image {
    -         childImageSharp {
    +         asset {
                fluid {
    -             ...GatsbyImageSharpFluid
    +             ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      `;
      
      const ProjectTemplate = ({ data }) => {
    -   const project = data.projectsJson;
    +   const project = data.sanityProject;
        const title = project.title;
        const description = project.description;
    -   const imageData = project.image.childImageSharp.fluid;
    +   const imageData = project.image.asset.fluid;
        const url = project.url;
      
        return (
          <Layout>
            <Project
              title={title}
              description={description}
              imageData={imageData}
              url={url}
            />
          </Layout>
        );
      };
      
      export default ProjectTemplate;
    ```

-   Update `gatsby-node.js`

    ```diff
      exports.createPages = async ({ actions, graphql, reporter }) => {
        const result = await graphql(`
          {
    -       allProjectsJson {
    +       allSanityProject {
              edges {
                node {
    -             slug
    +             slug {
    +               current
    +             }
                }
              }
            }
          }
        `);
      
        if (result.error) {
          reporter.panic('There was a problem loading your projects!');
          return;
        }
      
    -   const projects = result.data.allProjectsJson.edges;
    +   const projects = result.data.allSanityProject.edges;
      
        projects.forEach(({ node: project }) => {
    -     const slug = project.slug;
    +     const slug = project.slug.current;
      
          actions.createPage({
            path: `/${slug}/`,
            component: require.resolve('./src/templates/project.js'),
            context: { slug }
          });
        });
      };
    ```
