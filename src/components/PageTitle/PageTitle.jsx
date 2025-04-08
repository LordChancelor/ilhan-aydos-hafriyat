const PageTitle = ({ title }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="text-3xl font-extrabold tracking-wide text-yellow-500 uppercase">
        {title}
      </div>
      <hr className="h-[3px] w-64 bg-yellow-500 border-none rounded-full shadow-md" />
    </div>
  );
};

export default PageTitle;
