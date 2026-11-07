import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Designed &amp; built in Akure</span>
        <a href="#top" className="to-top">
          Back to top
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
