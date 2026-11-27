export default function LanguageSwitcher() {
  return (
    <div className="language-switcher">
      <span className="sr-only" data-i18n="nav.language">
        Language
      </span>
      <button
        className="language-trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="false"
      >
        <span
          className="language-current flag-display"
          data-lang="en"
          title="English"
          aria-hidden="true"
        />
      </button>
      <div className="language-menu" role="listbox">
        <button className="language-option" type="button" data-lang="en" title="English">
          English
        </button>
        <button className="language-option" type="button" data-lang="km" title="Khmer">
          Khmer
        </button>
      </div>
    </div>
  );
}
