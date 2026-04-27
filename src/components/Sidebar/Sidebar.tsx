import Resume from '../../assets/mikezhen.pdf'
import './Sidebar.css'

type Contact = {
    link: string;
    icon: string;
};

interface SidebarProps {
    name: string;
    role: string;
    description: string;
    contact: Array<Contact>;
}

export default function Sidebar({
  name,
  role,
  description,
  contact
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">

        {/* Profile */}
        <div className="profile-block">
          <div className="avatar-wrap">
            <div className="avatar-initials">MZ</div>
          </div>
          <div>
            <h1 className="profile-name">{name}</h1>
            <p className="profile-title">{role}</p>
          </div>
        </div>

        <div className="sidebar-action">
          <a href={Resume} className="sidebar-download-btn">
                    Download CV
          </a>
        </div>

        {/* Contact */}
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Contact</h2>
          <ul className="contact-list">
            {contact.map((c) => (
              <li key={c.link} className="contact-item">
                <a href={c.link} className={`contact-icon ${c.icon}`} />
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">About Me</h2>
          <p className="about-text">
            {description}
          </p>
        </div>
      </div>
    </aside>
  )
}
