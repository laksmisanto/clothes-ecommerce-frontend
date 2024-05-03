import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="w-12 h-12 flex justify-center items-center rounded-xl bg-slate-900 bg-opacity-25 hover:bg-gray-600 absolute left-0 top-2/4 -translate-y-2/4 cursor-pointer z-50"
      onClick={onClick}
    >
      <ArrowBackIosNewIcon className="text-orange-600" />
    </div>
  );
};

export default PrevArrow;
