import "./Stats.css";

const Stats = () => {
    const stats = [
        {
            value: "3",
            label: "Live Projects"
        },
        {
            value: "Cosmopolitan",
            label: "Software Engineering"
        },
        {
            value: "Full Stack",
            label: "MERN & Python Stack"
        },
        {
            value: "Abuja, NG",
            label: "Location"
        }
    ];

    return (
        <section className="stats">
            {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;