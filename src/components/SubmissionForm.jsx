import '../style/SubmissionForm.css'

import { useState } from 'react';

const SubmissionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({ english: true, maths: false, physics: false, });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };
  return (
    <div className='App'>
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method='get' onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input className="form-input"
            type="text"
            name='firstname'
            id='firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Enter First Name'
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input className="form-input"
            type="text"
            name='lastname'
            id='lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Enter Last Name'
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input className="form-input"
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />
          <label htmlFor="tel">Enter Contact*</label>
          <input className="form-input"
            type="tel"
            name='contact'
            id='contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder='Enter Mobile number'
            required
          />
          <label htmlFor="gender">Gender*</label>
          <input className="form-input"
            type="radio"
            name='gender'
            id='male'
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          Male
          <input className="form-input"
            type="radio"
            name='gender'
            id='female'
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          Female
          <input className="form-input"
            type="radio"
            name='gender'
            id='other'
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          Other
          <label htmlFor="lang">Your best Subject</label>
          <input className="form-input"
            type="checkbox"
            name='lang'
            id='english'
            checked={subjects.english === true}
            onChange={() => handleSubjectChange("english")}
          />
          English
          <input className="form-input"
            type="checkbox"
            name='lang'
            id='maths'
            checked={subjects.maths === true}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths
          <input className="form-input"
            type="checkbox"
            name='lang'
            id='physics'
            checked={subjects.physics === true}
            onChange={() => handleSubjectChange("physics")}
          />
          Physics
          <label htmlFor="file">Upload Resume*</label>
          <input className="form-input"
            type="file"
            name='file'
            id='file'
            onChange={(e) => setResume(e.target.files[0])}
            placeholder='Enter Upload File'
            required
          />
          <label htmlFor="url">Enter URL*</label>
          <input className="form-input"
            type="url"
            name='url'
            id='url'
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Enter url'
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) =>
              setSelectedOption(
                e.target.value
              )
            }
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label='Beginners'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>
            <optgroup label='Advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            value={about}
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder='About your self'
            required
          ></textarea>
          <button
            type='button'
            value="reset"
            onClick={handleReset}
          >Reset</button>
          <button
            type='submit'
          >Submit</button>
        </form>
      </fieldset>
    </div>
  )
}

export default SubmissionForm
