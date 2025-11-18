// Icon libraries from Expo
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

// Gradient background wrapper
import { LinearGradient } from 'expo-linear-gradient';

import { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Imported SVG images (react-native-svg-transformer must be set up)
import Download from '../../assets/images/SVG/Download.svg';
import Group from '../../assets/images/SVG/Group.svg';

// Screen dimensions for responsive layout
const { width, height } = Dimensions.get('window');

export default function App({ navigation }) {
  // State variables
  const [email, setEmail] = useState('');          // Input for email
  const [password, setPassword] = useState('');    // Input for password
  const [remember, setRemember] = useState(false); // Checkbox toggle
  const [showPassword, setShowPassword] = useState(false); // Show/hide password

  return (
    // Gradient Background for the Login Screen
    <LinearGradient
      colors={[
        '#f7f447ff',  
        '#FF7E5F',    
        '#ee5a73ff',  
        '#340d47ff', 
      ]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* ScrollView allows screen to scroll on small devices */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* App Logo (SVG Image) */}
        <Download width={250} height={150} color="#FFFFFF" />

        {/* Input Section */}
        <View style={styles.inputContainer}>

          {/* Email Field */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={20} color="#444" style={styles.icon} />
            <TextInput
              placeholder="EMAIL"
              placeholderTextColor="#666"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Field */}
          <View style={styles.inputWrapper}>
            {/* Custom SVG icon */}
            <Group />

            {/* Password Text Input */}
            <TextInput
              placeholder="PASSWORD"
              placeholderTextColor="#666"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}   // Toggles hide/show
            />

            {/* Password Show/Hide Button */}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialIcons
                name={showPassword ? 'lock-open' : 'lock'}
                size={20}
                color="#444"
                style={styles.iconRight}
              />
            </TouchableOpacity>
          </View>

          {/* Remember Me Checkbox */}
          <TouchableOpacity
            onPress={() => setRemember(!remember)}
            style={styles.checkboxContainer}
          >
            <Ionicons
              name={remember ? 'checkbox' : 'square-outline'}
              size={22}
              color="#fff"
            />
            <Text style={styles.checkboxLabel}>Remember me on this device</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.loginButtonContainer}
          onPress={() => console.log('Login pressed')} // Replace with auth logic
        >
          <LinearGradient
            colors={['#FDC830', '#F37335']} // Button gradient
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Social Login Text */}
        <Text style={styles.orLoginText}>or login using</Text>

        {/* Social Media Login Buttons */}
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

        {/* Footer Navigation Links */}
        <View style={styles.footerContainer}>
          {/* Sign Up Link */}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text style={styles.link}>Sign up now</Text>
            </Text>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.link, styles.forgotPassword]}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// ----------- STYLESHEET -----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // ScrollView layout (center content vertically)
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
    minHeight: height, 
  },

  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },

  // Email & Password wrapper
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 8,
    height: 50,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  icon: { marginRight: 10 },
  iconRight: { marginLeft: 10 },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  // Checkbox (Remember Me)
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 5,
  },

  checkboxLabel: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },

  // Login button wrapper
  loginButtonContainer: {
    width: '100%',
    marginVertical: 15,
  },

  loginButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },

  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  orLoginText: {
    color: 'white',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: '500',
  },

  // Social login icons row
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },

  // Single social button
  socialButton: {
    backgroundColor: '#4A235A',
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },

  footerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  footerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
  },

  link: {
    fontWeight: 'bold',
    color: '#FFD700',
    textDecorationLine: 'underline',
    fontSize: 14,
  },

  forgotPassword: {
    marginTop: 5,
  },
});
