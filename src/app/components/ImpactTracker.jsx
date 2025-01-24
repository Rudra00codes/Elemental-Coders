function ImpactTracker() {
  return (
    <div className="impact-dashboard">
      {/* Real-time impact visualization */}
      <div className="metrics">
        <div className="metric-card">
          <h3>Cups Saved</h3>
          <DynamicCounter value={totalCupsSaved} />
          <p>Equivalent to {calculateTreesSaved()} trees saved</p>
        </div>
        <div className="metric-card">
          <h3>Community Impact</h3>
          <p>{activeUsers} active participants</p>
          <p>{totalChallengesCompleted} challenges completed</p>
        </div>
      </div>
      {/* Personal progress tracking */}
      <UserProgress />
    </div>
  );
}
