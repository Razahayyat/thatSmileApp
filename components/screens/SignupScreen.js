import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Download from '../../assets/images/SVG/Download.svg';
import Group from '../../assets/images/SVG/Group.svg';

export default function SignupScreen({ navigation }) {
  // Local state for checkboxes
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  return (
    // Background Gradient Wrapper
    <LinearGradient
      colors={[
        '#f7f447ff', // Light yellow/orange top
        '#FF7E5F',   // Peachy orange
        '#ee5a73ff', // Pinkish tone
        '#340d47ff', // Deep purple bottom
      ]}
      start={{ x: 0.5, y: 0 }}   // Starts at top center
      end={{ x: 0.5, y: 1 }}     // Ends at bottom center
      style={styles.container}
    >

      {/* SVG Logo (Download Icon) */}
      <Download width={250} height={150} fill="#FFFFFF" />

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" />
        <TextInput
          placeholder="EMAIL"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        {/* Custom SVG Icon */}
        <Group />
        <TextInput
          placeholder="PASSWORD"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Checkbox: Terms & Conditions */}
      <TouchableOpacity
        onPress={() => setTerms(!terms)}
        style={styles.checkboxContainer}
      >
        <Ionicons
          name={terms ? 'checkbox-outline' : 'square-outline'}
          size={22}
          color="#fff"
        />
        <Text style={styles.checkboxLabel}>
          I agree to the <Text style={styles.link}>Terms and Conditions</Text>
        </Text>
      </TouchableOpacity>

      {/* Checkbox: Privacy Policy */}
      <TouchableOpacity
        onPress={() => setPrivacy(!privacy)}
        style={styles.checkboxContainer}
      >
        <Ionicons
          name={privacy ? 'checkbox-outline' : 'square-outline'}
          size={22}
          color="#fff"
        />
        <Text style={styles.checkboxLabel}>
          I have read the <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Login Text */}
      <Text style={styles.orText}>or sign up using</Text>

      {/* Row of social login icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="instagram" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Link to Login screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Sign in now</Text>
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Main container
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  // Social icons container
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '55%',
    marginVertical: 15,
  },

  // Individual social buttons
  socialButton: {
    backgroundColor: '#4A235A',
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  // Input fields
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
    height: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#333',
  },

  // Checkboxes
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 13,
  },

  // Sign up button
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginVertical: 20,
    elevation: 4,
  },
  buttonText: {
    color: '#c01b81',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // "or sign up using"
  orText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 14,
  },

  // Footer login link
  footerText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },

  // Highlighted link text
  link: {
    color: '#FFDD44',
    fontWeight: 'bold',
  },
});
