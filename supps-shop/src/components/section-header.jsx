const SectionHeader = ({ headerText }) => {
  return (
    <div className="mt-16 flex w-full items-center justify-center space-x-6 md:space-x-12 xl:mt-0">
      <div className="h-[3px] w-10 rounded-full bg-yellow-500 md:w-[26rem] lg:w-[32rem] xl:w-[36rem]" />
      <h1 className="min-w-fit text-4xl font-medium text-white xl:text-7xl">
        {headerText}
      </h1>
      <div className="h-[3px] w-10 rounded-full bg-yellow-500 md:w-[26rem] lg:w-[32rem] xl:w-[36rem]" />
    </div>
  );
};

export default SectionHeader;
