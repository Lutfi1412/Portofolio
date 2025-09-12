export default function SkillCard({ skill }) {
  return (
    <div className="bg-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-6 mx-auto">
        <skill.icon size={32} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-center text-white mb-6">
        {skill.name}
      </h3>

      <div className="space-y-3">
        {skill.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-gray-300"
          >
            <span>{item.name}</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, j) => (
                <div
                  key={j}
                  className={`w-2 h-2 rounded-full ${
                    j < item.skill ? "bg-purple-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
