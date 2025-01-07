import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import MyButton from '../components/MyButton';
import Box from '@mui/material/Box';

function LogIn() {


    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  
    // Fetch user session and listen for auth changes
    useEffect(() => {
      const fetchSession = async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        setUser(sessionData?.session?.user ?? null);
  
        // Listen for auth state changes
        const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user ?? null);
        });
  
        return () => subscription.unsubscribe();
      };
  
      fetchSession();
    }, []);
  
    // Validate email and password
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = (password) => password.length >= 6;
  
    // Handle login or sign-up
    const handleAuth = async () => {
      if (!isValidEmail(email) || !isValidPassword(password)) {
        return;
      }
      if (isLogin) {
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password.trim(),
        });
      } else {
        await supabase.auth.signUp({
          email: email.trim(),
          password: password.trim(),
        });
      }
    };
  
    // Logout
    const handleLogout = async () => {
      await supabase.auth.signOut();
      setUser(null);
    };
  

    return(
        <Box sx={{ textAlign: 'center', mt: 10, display: 'flex', flexDirection: 'column' }}>
        <h1>Hello!</h1>
        {user ? (
          // LoggedIn
          <div>
            <p>Welcome, {user.email}</p>
            <MyButton
            sx={{textTransform: "none", fontSize: "1rem", backgroundColor: 'primary.light',
              '&:hover': {
                backgroundColor: 'primary.dark', 
              },
              color: 'primary.darker', margin: "15px 0"}}
            onClick={handleLogout}
            >
              Logout
            </MyButton>
          </div>
        ) : (
          // Logged out
          <div>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form style={{display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: '20px auto', gap: '20px'}}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderColor: isValidEmail(email) || email === '' ? 'initial' : 'red',
                }}
              />
              {!isValidEmail(email) && email !== '' && (
                <p style={{ color: 'red' }}>Please enter a valid email address.</p>
              )}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  borderColor: isValidPassword(password) || password === '' ? 'initial' : 'red',
                }}
              />
              {!isValidPassword(password) && password !== '' && (
                <p style={{ color: 'red' }}>
                  Password must be at least 6 characters long.
                </p>
              )}
            </form>
            {/* Sign in or Login button */}
            <MyButton
              sx={{textTransform: "none", fontSize: "1rem", backgroundColor: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.dark', 
                },
                color: 'primary.darker', margin: "15px 0"}}
              onClick={handleAuth}
              disabled={!isValidEmail(email) || !isValidPassword(password)}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </MyButton>
  
            <p>
              {isLogin ? 'Need an account?' : 'Already have an account?'}
            </p>
  
            {/* Sign in or Login button */}
            <MyButton
              onClick={() => setIsLogin(!isLogin)}
                sx={{textTransform: "none", fontSize: "1rem", backgroundColor: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.dark', 
                },
                color: 'primary.darker', margin: "15px 0"}}
              >
              {isLogin ? 'Sign Up' : 'Login'}
            </MyButton>
          </div>
        )}
  
      </Box>
    );
}

export default LogIn;