function About () {
  return (
    <div className="max-w-[800px] lg:max-h-[600px] flex flex-col lg:flex-row">
      <div className="img-holder w-[800px] lg:w-[350px]"></div>
      <div className="lg:h-[100%] flex flex-col">
        <span className="self-end lg:max-w-[350px] lg:ml-[100px] text-he mt-auto mb-6 bg p-8 rounded-sm bg-[#fcfcfc] dark:bg-[#2E2E2B]">
          I’m Owen Hill, a primarily self-taught developer originally
          from the Chicago, IL area with plans to move to Dallas, TX. <br/><br/>
          I am currently seeking full-time and part-time opportunities to do what I love most -- mess around with 
          computers and build products for people to use. <br/><br/>
          When I’m not at my desk programming, you can usually find me tossing around weights, 
          enjoying casual and competitive games, staying updated with airing anime, or socializing. <br/><br/>
          You can reach me at this email: <b>owenghill@outlook.com</b> <br/><br/>
          Thank you for taking the time to read a little about me. I look forward to connecting with you!
        </span>
        <button onClick={() => window.open('https://docs.google.com/document/d/1lP_JKz0WwfsQNhqwqt4dNq4dEYDS9OVYiHiyFei9tLE/edit?usp=sharing', '_blank')} className="lg:ml-[100px] bg-blue-500 hover:bg-blue-700 dark:bg-[#60A16D] dark:hover:bg-[#4C7F56] text-white font-bold py-2 px-4 rounded">Download Resume</button>
      </div>
    </div>
  )
}

export default About;