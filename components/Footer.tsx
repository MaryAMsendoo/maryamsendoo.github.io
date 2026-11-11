import { RESUME_URL, socials } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="icon_container">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <i className={`${social.icon} fa-2x icon`}></i>
          </a>
        ))}
      </div>
      <li className="fas fa-dial-call"></li>
      <p> 08057789650</p>
      <p>
        <i>marymsen05@gmail.com</i>
      </p>
      <p>
        <a className="text-light" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </p>
      <p className="text pt-5">&copy;Mary Msendoo 2025</p>
    </footer>
  );
}
