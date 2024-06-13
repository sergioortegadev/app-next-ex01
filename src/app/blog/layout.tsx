const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header> - Cabecera BLOG - </header>
      <main>
        <section>{children}</section>
        <aside>
          <form>
            <input type="search" name="" id="" />
            <input type="submit" value="SEARCH" />
          </form>
        </aside>
      </main>
      <footer>PIE DE BLOG</footer>
    </>
  );
};

export default BlogLayout;
