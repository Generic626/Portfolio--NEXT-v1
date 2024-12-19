const CareerCard = ({ timeframe, jobTitle, jobDesc, children }) => {
  return (
    <>
      {/* Timeframe + Job Title  */}
      <tr>
        <td>
          <div className="flex justify-center">
            <div className="font-thin text-sm text-zinc-400">{timeframe}</div>
          </div>
        </td>
        <td>
          <span className="font-bold">{jobTitle}</span>
        </td>
      </tr>

      {/* Job Description */}
      <tr>
        <td rowSpan="2">
          {/* Vertical Decor */}
          <div className="flex justify-center h-full">
            <div className="w-[0px] h-[100px] border-l border-zinc-500"></div>
          </div>
        </td>
        <td>
          <div className="font-thin text-sm text-zinc-400 text-justify">
            {jobDesc}
          </div>
        </td>
      </tr>
      {/* Badges */}
      <tr>
        <td>
          <div className="my-4">{children}</div>
        </td>
      </tr>
    </>
  );
};

export default CareerCard;
