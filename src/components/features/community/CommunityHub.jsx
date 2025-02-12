function CommunityHub() {
  return (
    <div className="community-hub">
      <div className="feed">
        <PostCreator />
        <Timeline />
      </div>
      <div className="leaderboard">
        <h3>Top Impact Makers</h3>
        <LeaderboardList />
      </div>
      <div className="events">
        <h3>Upcoming Events</h3>
        <EventsList />
      </div>
    </div>
  );
} 