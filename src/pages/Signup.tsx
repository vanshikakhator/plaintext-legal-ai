// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useToast } from "@/hooks/use-toast";
// import illustration from "@/assets/signup.png";
// import { Navbar } from "@/components/layout/Navbar";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
//       toast({
//         title: "Missing information",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       toast({
//         title: "Password mismatch",
//         description: "Passwords do not match.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (formData.password.length < 8) {
//       toast({
//         title: "Weak password",
//         description: "Password must be at least 8 characters long.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!formData.agreeToTerms) {
//       toast({
//         title: "Terms required",
//         description: "Please agree to the terms and conditions.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsLoading(true);

//     // Simulate signup process
//     setTimeout(() => {
//       setIsLoading(false);
//       toast({
//         title: "Account created successfully",
//         description: "Welcome to Legalyze! You can now sign in.",
//       });
//       navigate("/login");
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//     <div className="flex min-h-screen">
//       {/* Left Illustration */}
//       <div className="hidden lg:flex w-1/2 bg-muted items-center justify-center p-8">
//         <img
//           src="{illustration}"
//           alt="Signup Illustration"
//           className="max-w-md"
//         />
//       </div>

//       {/* Right Signup Card */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center bg-background p-6">
//         <div className="w-full max-w-md">
//           <div className="mb-8 text-center">
//             <Link to="/" className="inline-flex items-center space-x-2">
//               <img src="/logo.svg" alt="Legalyze Logo" className="h-10" />
//               <span className="text-3xl font-bold">Legalyze</span>
//             </Link>
//             <p className="text-muted-foreground mt-2">Create your account</p>
//           </div>

//           <div className="bg-card rounded-lg shadow-lg p-8">
//             <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
//             <form onSubmit={handleSignup} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   placeholder="First name"
//                   required
//                 />
//                 <Input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   placeholder="Last name"
//                   required
//                 />
//               </div>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email address"
//                 required
//               />
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="Password"
//                 required
//               />
//               <Input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 placeholder="Confirm password"
//                 required
//               />

//               <div className="flex items-center space-x-2">
//                 <Checkbox
//                   id="terms"
//                   checked={formData.agreeToTerms}
//                   onCheckedChange={(checked) =>
//                     setFormData((prev) => ({ ...prev, agreeToTerms: checked === true }))
//                   }
//                 />
//                 <label htmlFor="terms" className="text-sm text-muted-foreground">
//                   I agree to the{" "}
//                   <Link to="/terms" className="text-primary hover:underline">
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link to="/privacy" className="text-primary hover:underline">
//                     Privacy Policy
//                   </Link>
//                 </label>
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full"
//                 size="lg"
//               >
//                 {isLoading ? "Creating Account..." : "Create Account"}
//               </Button>
//             </form>

//             <p className="mt-6 text-center text-sm text-muted-foreground">
//               Already have an account?{" "}
//               <Link to="/login" className="text-primary hover:underline">
//                 Sign in here
//               </Link>
//             </p>
//           </div>

//           <div className="text-center mt-6">
//             <Link
//               to="/"
//               className="text-sm text-muted-foreground hover:text-foreground"
//             >
//               ← Back to home
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import illustration from "@/assets/signup3.png"; // use a different illustration if you have one
import { Navbar } from "@/components/layout/Navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Signup successful",
        description: "Welcome to Legalyze!",
      });
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Centered container */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-5xl  bg-[#002366] rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Illustration */}
          <div className="hidden md:flex items-center justify-center bg-gray-900">
            <img
              src={illustration}
              alt="Signup illustration"
              className="w-full h-full object-center"
            />
          </div>

          {/* Right Form */}
          <div className="p-8 flex flex-col justify-center">
            {/* Logo + heading */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-3">
                <Scale className="h-10 w-10 text-white" />
                <span className="text-3xl font-bold text-white">Legalyze</span>
              </Link>
              <p className="text-gray-300 mt-2">Create a new account</p>
            </div>

            {/* Signup Card */}
            <Card className="shadow-none border-0 bg-[#002366]">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">
                  Join Us
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSignup} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-gray-200 text-gray-900"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-gray-200 text-gray-900"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pr-10 bg-gray-200 text-gray-900"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-900"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="w-full bg-gray-200 text-gray-900"
                      required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-900"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                  </div>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gray-300 text-blue-900 text-lg hover:opacity-90 hover:bg-white"
                    size="lg"
                  >
                    {isLoading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>

                {/* Login redirect */}
                <div className="mt-6 text-center">
                  <p className="text-gray-300">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-white hover:text-gray-300 font-medium"
                    >
                      Log in here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Back to home */}
            <div className="text-center mt-6">
              <Link to="/" className="text-sm text-gray-300 hover:text-white">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
