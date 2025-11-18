import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Download from '../../assets/images/SVG/Download.svg';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    // Background Gradient
    <LinearGradient
      colors={[
        '#f7f447ff', // Light yellow/orange (top)
        '#FF7E5F',   // Peachy orange
        '#ee5a73ff', // Pinkish tone
        '#340d47ff', // Deep purple (bottom)
      ]}
      start={{ x: 0.5, y: 0 }}     // Gradient start: Top center
      end={{ x: 0.5, y: 1 }}       // Gradient end: Bottom center
      style={styles.container}
    >

      {/* Page SVG Icon */}
      <Download width={250} height={150} />

      {/* Title */}
      <Text style={styles.title}>Forgot your password?</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Please enter your email address to reset your password.
      </Text>

      {/* Email Input Field */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" />
        <TextInput
          placeholder="EMAIL"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      {/* Navigation Link to Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Sign in now</Text>
        </Text>
      </TouchableOpacity>

      {/* Navigation Link to Signup */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.link}>Sign up now</Text>
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Main container layout
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 25 
  },

  // Titles
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center'
  },

  // Input field style
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
  },
  input: { 
    flex: 1, 
    padding: 10, 
    color: '#333' 
  },

  // Button style
  button: {
    backgroundColor: '#FEE140',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginVertical: 20,
  },
  buttonText: { 
    color: '#FA709A', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  // Footer links
  footerText: { 
    color: '#fff', 
    marginTop: 10 
  },
  link: { 
    color: '#FFCC00', 
    fontWeight: 'bold' 
  },
});
