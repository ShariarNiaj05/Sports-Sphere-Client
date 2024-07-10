const Title = ({ children }: { children: string }) => {
  return (
    <div className="relative border-s-8 border-primary ps-3">
      <h2 className="text-6xl font-bold text-center text-primary">
        {children}
      </h2>
      <p className="absolute bottom-0 text-9xl -z-10 opacity-5"> {children}</p>
    </div>
  );
};

export default Title;
