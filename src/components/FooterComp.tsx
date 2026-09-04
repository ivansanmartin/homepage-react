import { useLang } from '../i18n'

const FooterComp = () => {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name mono">ISM — Iván San Martín</span>
        <span className="footer__quote mono">{t.footer.quote}</span>
        <span className="footer__year mono">{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default FooterComp
