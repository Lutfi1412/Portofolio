export default function About() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* gambar */}
          <div>
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 w-full h-96 flex items-center justify-center rounded-2xl shadow-lg shadow-slate-800/50"
            />
          </div>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a 7th-semester IT student with a strong focus on software
              development and an interest in machine learning. I'm passionate
              about building effective, user-friendly applications and exploring
              how technology can solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed">
              I have hands-on experience with multi-platform Kotlin, React,
              Golang, MySQL, and machine learning. I enjoy applying my skills to
              both front-end and back-end development. My goal is to continue
              deepening my skills in software development while expanding my
              knowledge of machine learning, with the goal of creating better
              solutions in the tech industry.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  3+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
