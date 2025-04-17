import React from 'react';

const FamilyScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => window.history.back()}>
          <span style={styles.backIcon}>&larr;</span>
          <span style={styles.backText}>Back</span>
        </button>
        <h1 style={styles.headerTitle}>Our Families</h1>
      </div>

      {/* Bride's Family */}
      <div style={styles.familySection}>
        <img
          src="bride.jpg"
          alt="Bride's Family"
          style={styles.familyImage}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.familyTitle}>Bride's Family</h2>
          <h3 style={styles.familySubtitle}>The Majumder Family</h3>
          <p style={styles.familyText}>
            Chandrima Majumder comes from a loving family of four. Her parents, Chandan Kumar Majumder and Mousumi Majumder,
            have been married for 30 years and have always been pillars of their community.
          </p>
          <p style={styles.familyMembers}>
            • Father: Chandan Kumar Majumder <br />
            • Mother: Mousumi Majumder<br />
            • Uncle: Tapan Kumar Majumder<br />
          </p>
        </div>
      </div>

      {/* Groom's Family */}
      <div style={styles.familySection}>
        <img
          src="Groom.jpeg"
          alt="Groom's Family"
          style={styles.familyImage}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.familyTitle}>Groom's Family</h2>
          <h3 style={styles.familySubtitle}>The Das Family</h3>
          <p style={styles.familyText}>
            Bubai das grew up in a tight-knit family. His parents, Samar Chandra dutta, Usha Dutta, Late Ashish Dutta ,Rama Dutta, Shishr Dutta
            have created a warm and welcoming home filled with love and laughter.
          </p>
          <p style={styles.familyMembers}>
            • Father: Nimai Chandra das<br />
            • Mother: Urmila das<br />
            • Brother: Koushik das<br />
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div style={styles.legacySection}>
        <h2 style={styles.legacyTitle}>Our Family Legacy</h2>
        <p style={styles.legacyText}>
          As we join these two wonderful families together, we celebrate the unique traditions,
          values, and love that each brings to this union. Together, we look forward to creating
          new memories and continuing the legacy of both families.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    padding: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    paddingBottom: '16px',
    marginBottom: '16px',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  backIcon: {
    fontSize: '16px',
    color: '#333',
  },
  backText: {
    marginLeft: '8px',
    fontSize: '16px',
    color: '#333',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  familySection: {
    marginBottom: '24px',
  },
  familyImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  textContainer: {
    padding: '16px',
  },
  familyTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '4px',
  },
  familySubtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '12px',
  },
  familyText: {
    fontSize: '16px',
    color: '#444',
    lineHeight: '1.5',
    marginBottom: '16px',
  },
  familyMembers: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
    marginLeft: '8px',
  },
  legacySection: {
    padding: '16px',
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    marginTop: '8px',
    marginBottom: '32px',
  },
  legacyTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '12px',
    textAlign: 'center',
  },
  legacyText: {
    fontSize: '16px',
    color: '#444',
    lineHeight: '1.5',
    textAlign: 'center',
  },
};

export default FamilyScreen;