import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BookAppointments() {
  const [formData, setFormData] = useState({
    childName: "",
    motherName: "",
    fatherName: "",
    age: "",
    sex: "",
    dob: "",
    schoolName: "",
    grade: "",
    atHome: "",
    atSchool: "",
    diagnosis: "",
    phoneNumber: "",
    email: "",
    address: "",
    preferredDay: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/appointments/book", formData);
      alert(response.data.message);
      setFormData({
        childName: "",
        motherName: "",
        fatherName: "",
        age: "",
        sex: "",
        dob: "",
        schoolName: "",
        grade: "",
        atHome: "",
        atSchool: "",
        diagnosis: "",
        phoneNumber: "",
        email: "",
        address: "",
        preferredDay: "",
        preferredTime: "",
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment.");
    }
  };

  return (
    <div className="p-7 md:p-1 mt-10 min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="w-full max-w-4xl bg-white shadow-lg p-6 md:p-10 rounded-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-4">Book an Appointment</h1>
        <p className="text-gray-700 text-center mb-6">Schedule an appointment with our therapists easily.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="childName" placeholder="Child's Name" onChange={handleChange} value={formData.childName} className="w-full" />
          <Input name="motherName" placeholder="Mother's Name" onChange={handleChange} value={formData.motherName} className="w-full" />
          <Input name="fatherName" placeholder="Father's Name" onChange={handleChange} value={formData.fatherName} className="w-full" />
          <Input name="age" type="number" placeholder="Age" onChange={handleChange} value={formData.age} className="w-full" />
          <Input name="sex" placeholder="Sex" onChange={handleChange} value={formData.sex} className="w-full" />
          <Input name="dob" type="date" onChange={handleChange} value={formData.dob} className="w-full" />
          <Input name="schoolName" placeholder="School Name" onChange={handleChange} value={formData.schoolName} className="w-full" />
          <Input name="grade" placeholder="Grade" onChange={handleChange} value={formData.grade} className="w-full" />
          
          <div className="md:col-span-2">
            <Textarea name="atHome" placeholder="Chief Complaints at Home" onChange={handleChange} value={formData.atHome} className="w-full" />
          </div>
          <div className="md:col-span-2">
            <Textarea name="atSchool" placeholder="Chief Complaints at School" onChange={handleChange} value={formData.atSchool} className="w-full" />
          </div>
          <div className="md:col-span-2">
            <Textarea name="diagnosis" placeholder="Any Diagnosis" onChange={handleChange} value={formData.diagnosis} className="w-full" />
          </div>
          
          <Input name="phoneNumber" type="tel" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} className="w-full" />
          <Input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} className="w-full" />
          <Input name="address" placeholder="Address" onChange={handleChange} value={formData.address} className="w-full md:col-span-2" />
          <Input name="preferredDay" placeholder="Preferred Day" onChange={handleChange} value={formData.preferredDay} className="w-full" />
          <Input name="preferredTime" placeholder="Preferred Time" onChange={handleChange} value={formData.preferredTime} className="w-full" />

          <div className="md:col-span-2 flex justify-center mt-4">
            <Button type="submit" className="bg-blue-600 text-white p-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
