function ProgressBar({ FormTitle, currentPage }) {
  return (
    <>
      <div className='progress-bar'>
        {FormTitle.map((item, index) => (
          <div
            style={{ display: "inline-block", marginLeft: "0.8rem" }}
            key={index}
          >
            <div
              className='round'
              style={{
                backgroundColor: currentPage <= index ? "var(--background-color)" : "#FF9966",
              }}
            >
              {currentPage <= index ? (
                index + 1
              ) : (
                <i
                  className='fa-solid fa-check'
                  style={{ color: currentPage <= index ? "black" : "white" }}
                ></i>
              )}
            </div>
            {index <= 2 ? (
              <div
                className='line'
                style={{
                  border:
                    currentPage > index
                      ? "1px solid #FF9966"
                      : "1px solid var(--background-color)",
                }}
              ></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default ProgressBar;
