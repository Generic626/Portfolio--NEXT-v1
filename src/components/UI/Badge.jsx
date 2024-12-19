import { Tooltip } from "@mui/material";

const Badge = (props) => {
  return (
    <div className="cursor-pointer ">
      <Tooltip title={props.text} arrow>
        <div className="bg-primary-lighter rounded-full px-4 py-2 w-fit">
          <img className="size-[15px]" src={props.img} />
        </div>
      </Tooltip>
    </div>
  );
};

export default Badge;
