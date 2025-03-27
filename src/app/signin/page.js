"use client";

import { useState } from "react";
import { signIn, signInWithGoogle } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your Vacation Rental account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                type="email"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              onClick={handleSignIn} 
              className="w-full"
              size="lg"
            >
              Sign In
            </Button>
            
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">Or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Button 
              variant="outline" 
              onClick={handleGoogleSignIn}
              className="w-full"
              size="lg"
            >
              <img 
                src="/api/placeholder/20/20" 
                alt="Google Logo" 
                className="mr-2 h-5 w-5"
              />
              Sign In with Google
            </Button>

            <div className="text-center text-sm text-gray-600 mt-4">
              Don't have an account? {" "}
              <a 
                href="/signup" 
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}