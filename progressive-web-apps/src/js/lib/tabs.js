const TAB_CONTAINER_CLASS = 'js--tabs';

const tabContainer = document.querySelector(`.${TAB_CONTAINER_CLASS}`);
const tabs = tabContainer.querySelectorAll('a');
const panels = document.querySelectorAll('[aria-labelled-by^="tab-"]');

export default function({ onChange = () => {} }) {
  tabContainer.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
      event.preventDefault();

      // deactivate all tabs and hide all content panels
      [].forEach.call(tabs, tab => tab.setAttribute('aria-selected', false));
      [].forEach.call(panels, panel => panel.setAttribute('aria-hidden', true));

      // activate the current tab and show the current content panel
      event.target.setAttribute('aria-selected', true);
      document.getElementById(event.target.href.split('#')[1]).setAttribute('aria-hidden', false);

      onChange();
    }
  });
}
