import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Download from '../../assets/images/SVG/Download.svg';

export default function WelcomeScreen({ navigation }) {

  // Auto-navigation effect (Splash Screen → Login)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Redirect after 3 seconds
    }, 3000);

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    // Background Gradient
    <LinearGradient
      colors={[
        '#f7f447ff', // Light yellow/orange top
        '#FF7E5F',   // Peachy orange
        '#ee5a73ff', // Pinkish tone
        '#340d47ff', // Deep purple bottom
      ]}
      start={{ x: 0.5, y: 0 }}   // Start gradient from top center
      end={{ x: 0.5, y: 1 }}     // End gradient at bottom center
      style={styles.container}
    >

      {/* Main App Logo (SVG) */}
      <Download width={250} height={150} fill="#FFFFFF" />

      {/* App Tagline */}
      <Text style={styles.tagline}>Smile more. Feel better.</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Main splash screen container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // Tagline text under the logo
  tagline: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
  },

  // (Old unused logo styles — kept for future use)
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoTop: {
    position: 'absolute',
    top: -2,
    left: -35,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logo: {
    color: '#fff',
    fontSize: 64,
    fontFamily: 'cursive',
  },
  logoBottom: {
    position: 'absolute',
    bottom: -10,
    right: -20,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logoWrapper: {
    marginBottom: 30,
    alignItems: 'center',
  },
  smileRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sLetter: {
    fontSize: 74,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 1,
    fontFamily: 'cursive',
  },
  restLetters: {
    fontSize: 58,
    color: '#fff',
    fontFamily: 'cursive',
    marginLeft: 2,
  },
});
