function GamificationSystem() {
  return (
    <div className="gamification">
      <div className="challenges">
        <h2>Weekly Challenges</h2>
        <ChallengesList challenges={[
          {
            title: "7-Day Reusable Cup Streak",
            points: 100,
            impact: "Save 7 disposable cups"
          },
          {
            title: "Influence 3 Friends",
            points: 150,
            impact: "Multiply your impact"
          }
        ]} />
      </div>
      <div className="rewards-shop">
        {/* Redeem points for eco-friendly products */}
      </div>
    </div>
  );
} 