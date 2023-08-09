import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";

const Pagination = ({ totalCount, pageSize, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const onNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex">
      <button
        onClick={(e) => onPrevious(e)}
        disabled={currentPage === 1}
        className={`text-[#f2f2f0] ${currentPage === 1 ? "hidden" : ""}`}
      >
        <ChevronLeftIcon width={20} height={20} />
      </button>
      <button
        className={`text-[#f2f2f0] ${
          currentPage === totalPages ? "hidden" : ""
        }`}
        onClick={(e) => onNext(e)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon width={20} height={20} />
      </button>
    </div>
  );
};

export default Pagination;
