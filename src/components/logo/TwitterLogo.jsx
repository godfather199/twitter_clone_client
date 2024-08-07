


function TwitterLogo({width, height}) {
  return (
    <div  className="">
      <img
        // src="https://img.freepik.com/free-vector/bird-icon_23-2147507196.jpg?t=st=1716088305~exp=1716091905~hmac=16ec2cb9b2c1ba24859ee58ff8a51c9afc228626dea0766e14cfc8b7e8aaa624&w=740"
        src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png"
        alt=""
        // className="w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] rounded-full"
        className={` h-[3rem] sm:w-[5rem] sm:h-[5rem] rounded-full shadow-lg`}
        style={{
          width: width ? `${width}rem` : "3rem",
          height: height ? `${height}rem` : "3rem",
        }}
      />
    </div>
  );
}

export default TwitterLogo;
