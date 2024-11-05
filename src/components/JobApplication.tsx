import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
  
type FormData = {
    fullName: string;
    email: string;
    gender: string;
    control: string;
    fields: { label: string; value: string };
    skills: string;
  };
  

const JobApplication: React.FC = () => {
    const {
      register,
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FormData>();

    const handleApplication = handleSubmit((data) => {
        const user = `${data.fullName}`;

        if (data.skills.length >= 4) {
            alert(`${user} You are qualified for an interview to the position of ${data.fields.value}.`);
        } else {
            alert(`${user} You not are qualified for an interview to the position of ${data.fields.value}, because you have not sufficient skills.`);
        }
        reset();
    });

    return (
        <main className="flex flex-col justify-center mx-auto">
            <section className="relative mt-20 mx-auto px-10 sm:w-2/3">
                <h2 className="text-orange-700 text-center text-2xl pb-2 font-semibold">Applicant infos and skills</h2>
				<p className="text-lg text-center md:w-[420px] md:mx-auto lg:w-[460px]">
                Please, fill and select all required fields. You will be qualified or not for an interview according your skills.
                </p>
                <form
                    onSubmit={handleApplication}
                    autoComplete="off" 
                    className="flex flex-col justify-center mt-10 mx-auto bg-white px-4 py-5 shadow rounded-lg sm:m-6 sm:p-6 lg:w-2/3 lg:mx-auto text-gray-900"
                >
		            <div className="flex flex-col mt-4 font-medium">
                        <label role="fullnamebox" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-indigo-300"
                            {...register("fullName", {
                                required: "Full Name is required.",
                                pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: "Full Name is not valid.",
                                },
                            })}
                        />
                        <small className="text-red-400 font-medium">
                           {errors.fullName && <p className="errorMsg">{errors.fullName.message}</p>}
                        </small>
                    </div>
                    <div className="flex flex-col mt-4 font-medium">
                        <label role="emailbox" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-indigo-300"
                            {...register("email", {
                                required: "Email is required.",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is not valid.",
                                },
                            })}
                        />
                        <small className="text-red-400 font-medium">
                            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                        </small>
                    </div>
                    <div className="flex flex-col justify-start items-start mt-4">
                        <label className="mb-1 font-medium" role="gender" htmlFor="gender">Select Gender</label>
                        <div className="flex justify-between items-center">
                            <input
                                type="radio"
                                value="male"
                                className="mx-2"
                                {...register("gender", {
                                    required: "Please select your gender",
                                })}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="flex justify-between items-center">
                            <input
                                type="radio"
                                value="female"
                                className="mx-2"
                                {...register("gender")}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                        {errors.gender && <small className="errorMsg text-red-400 font-medium">{errors.gender.message}</small>}
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="mb-1 font-medium" htmlFor="fields">Select Field of Interest</label>
                        <Controller
                            name="fields"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select {...field} 
                                    options={[
                                        { value: "Frontend developer", label: "Frontend developer" },
                                        { value: "Backend developer", label: "Backend developer" },
                                        { value: "Full-stack developer", label: "Full-stack developer" },
                                        { value: "UI-UX developer", label: "UI-UX developer" },
                                    ]} 
                                />
                            )}
                        />
                        {errors.fields && (
                            <small className="errorMsg text-red-400 font-medium">This is a required field.</small>
                        )}
                    </div>
                    <div className="text-center mt-4">
                        <label className="mb-1 font-medium" htmlFor="skills">Select Your Skills</label>
                    </div>
                    <div className="flex justify-around items-center mt-4">
                        <div className="flex flex-col justify-start items-start">
                            <div className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    id="HTML5"
                                    value="html5"
                                    className="mx-2 my-1"
                                    {...register("skills")}
                                />
                                <label htmlFor="html5">HTML5</label>
                            </div>
                            <div className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    id="css3"
                                    value="css3"
                                    className="mx-2 my-1"
                                    {...register("skills")}
                                />
                                <label htmlFor="css3">CSS3</label>
                            </div>
                            <div className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    id="javaScript"
                                    value="javaScript"
                                    className="mx-2 my-1"
                                    {...register("skills", {
                                        required: "Please select at-least one skill",
                                    })}
                                />
                                <label htmlFor="javaScript">JavaScript</label>
                            </div>
                        </div>
                        <div className="flex flex-col justify- items-start">
                            <div className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    id="react"
                                    value="react"
                                    className="mx-2 my-1"
                                    {...register("skills")}
                                />
                                <label htmlFor="react">React</label>
                            </div>
                            <div className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    id="node.js"
                                    value="nodejs"
                                    className="mx-2 my-1"
                                    {...register("skills")}
                                />
                                <label htmlFor="nodejs">Node.js</label>
                            </div>
                            <div className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    id="sql"
                                    value="sql"
                                    className="mx-2 my-1"
                                    {...register("skills")}
                                />
                                <label htmlFor="sql">SQL</label>
                            </div>
                        </div>
                    </div>
                    {errors.skills && <small className="errorMsg text-red-400 font-medium text-center mt-2">{errors.skills.message}</small>}                  
                    <div className="flex flex-col mt-4">
                        <button 
                            type="submit" 
                            className="bg-blue-900 p-3 pt-2 my-6 rounded-lg text-white font-medium m-auto w-3/6 hover:opacity-75">
                                Submit
                        </button>
                    </div>
		        </form>
            </section>
        </main>
    );
}

export default JobApplication;