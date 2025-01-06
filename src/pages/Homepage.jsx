import MyButton from "../components/MyButton";


export default function Homepage() {
  return (
    <div className="w-full">
        <h1 className="text-6xl font-sans pb-14 mt-20">
            Boost your productivity.<br/>Start using our app today.
        </h1>
        <MyButton 
            sx={{textTransform: "none", fontSize: "1rem", backgroundColor: 'primary.light',
                '&:hover': {
                backgroundColor: 'primary.dark', 
                },
                color: 'primary.darker', margin: "15px 0"}}
        >
            Get Started
        </MyButton>
        <MyButton sx={{textTransform: "none", fontSize: "1rem", color: 'primary.darker', marginLeft: "20px"}}>Learn more</MyButton>

    </div>
  )
}
