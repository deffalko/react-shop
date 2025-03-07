function Footer() {
  return (
    <footer className="page-footer  light-blue darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a href="!#" className="grey-text text-lighten-4 right">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
