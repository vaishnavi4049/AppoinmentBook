import React from "react"
import { Link } from 'react-router-dom'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"
import Button from "./ui/Button"
import { useNavigate } from "react-router-dom";

const PersonalInfo = ({ formData = {}, setFormData = () => {}, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    if (typeof setFormData === "function") {
      setFormData((prev) => ({ ...prev, [name]: value }))
    } else {
      console.warn("setFormData is not provided or is not a function.")
    }
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof onSubmit === "function") {
      onSubmit(formData)
      navigate("/AppointmentBook")
    } else {
      console.log("Submitted Data:", formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="shadow-xl border rounded-2xl">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Personal Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="+91 12345 67890"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Full address"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact || ""}
                onChange={handleChange}
                placeholder="Contact number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Input
                id="insurance"
                name="insurance"
                value={formData.insurance || ""}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medicalHistory">Previous Medical History</Label>
            <Textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory || ""}
              onChange={handleChange}
              placeholder="Mention any known allergies, treatments, or surgeries"
            />
          </div>

          <div className="pt-4 flex justify-between items-center">
            
            <Button
              type="submit"
              className="px-6 py-2 text-white bg-teal-600 hover:bg-teal-700 transition-all"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

export default PersonalInfo
