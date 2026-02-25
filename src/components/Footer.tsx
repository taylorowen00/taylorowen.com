export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border-light)',
      padding: '40px 0',
      marginTop: '80px',
    }}>
      <div className="container footer-inner" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
      }}>
        <span>&copy; {new Date().getFullYear()} Taylor Owen</span>
        <span>Beaverbrook Chair in Media, Ethics and Communication, McGill University</span>
      </div>
    </footer>
  )
}
