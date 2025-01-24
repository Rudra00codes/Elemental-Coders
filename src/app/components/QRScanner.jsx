function QRScanner() {
  const handleScan = async (data) => {
    if (data) {
      // Verify cup usage
      // Update user's impact metrics
      // Award points
      await trackCupUsage({
        userId: currentUser.id,
        cupId: data,
        timestamp: new Date(),
        location: userLocation
      });
    }
  };

  return (
    <div className="qr-scanner">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
} 