import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SignUpPage from "../pages/Librarian/Sign-In&Up/SignUpPage";
import { CardContent } from "@mui/material";

export default function Login({
  signIn,
  Timer,
  Header,
  InputContent,
  OnSubmit,
  Content,
  isLoading,
}) {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-96">
        {Header && (
          <CardHeader
            shadow={false}
            floated={false}
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              {Header}
            </Typography>
          </CardHeader>
        )}
        {Content && (
          <CardContent className="grid place-items-center">
            <Typography variant="h5" color="blue">
              {Content}
            </Typography>
          </CardContent>
        )}
        <CardBody className="flex flex-col gap-4">
          {/* {Email && <Input label="Email" type="email" size="lg" />}
        {Password &&  <Input label="Password" type="password" size="lg" />}
        {Otp &&  <Input label="OTP" type="string" size="lg" />} */}
          {InputContent}
        </CardBody>
        {Timer && Timer}
        <div className="w-80 mx-auto h-[2px] bg-light-blue-500 rounded-xl mt-10" />

        <CardFooter className="pt-0 ">
          
          <Button
            disabled={isLoading}
            variant="gradient"
            onClick={() => OnSubmit()}
            className="my-10 mx-auto text-white text-center font-extrabold"
            fullWidth
          >
            submit
          </Button>
          {signIn && (
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to={signIn}>
                <Typography
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
