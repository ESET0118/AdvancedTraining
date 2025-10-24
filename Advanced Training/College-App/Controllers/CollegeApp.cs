using College_App.Data;
using College_App.Model;
using College_App.Model.Repository;

//using College_App.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace College_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollegeApp : ControllerBase
    {
        //[HttpGet]
        //public IEnumerable<Student> getStudents()
        //{
        //    return collegeRepository.students;
        //}

        //[HttpGet("{id:int}", Name = "getStudentById")]
        //public Student getStudentById(int id)
        //{
        //    return collegeRepository.students.Where(s => s.studentID == id).FirstOrDefault();
        //}

        //[HttpGet("getStudent")]
        //public IEnumerable<Student> GetStudent(int id)
        //{
        //    return collegeRepository.students.Where(s => s.studentID == id);
        //}

        //[HttpDelete]
        //public bool deleteStudent(int id)
        //{
        //    var student = collegeRepository.students.Where(s => s.studentID == id).FirstOrDefault();
        //    return collegeRepository.students.Remove(student);
        //}

        //[HttpGet("GetStudentByI")]
        //public ActionResult<Student> GetStudentById(int id)
        //{
        //    if(id==0)
        //        return BadRequest("id cannot be zero");
        //    return Ok(collegeRepository.students.Where(s => s.studentID == id).FirstOrDefault());
        //}

        //[HttpGet]
        //[Route("All")]

        //public ActionResult<IEnumerable<Student>> GetAllStudents()
        //{
        //    var students = collegeRepository.students.Select(s => new StudentDTO()
        //    {
        //        //studentID = s.studentID,
        //        name = s.name,
        //        email = s.email,
        //        age = s.age
        //    });
        //    return Ok(students);

        //    //return collegeRepository.students;
        //}
        //[HttpGet("GetStudentByID")]
        //public ActionResult<IEnumerable<Student>> GetStudentByID(int id)
        //{
        //    var students = collegeRepository.students.Where(s => s.studentID == id).FirstOrDefault();
        //    if (students == null)
        //    {
        //        return NotFound($"Student with ID {id} not found.");
        //    }
        //    var studentDTO = new StudentDTO()
        //    {
        //        //studentID = students.studentID,
        //        name = students.name,
        //        email = students.email,
        //        age = students.age
        //    };
        //    return Ok(studentDTO);
        //}

        //[HttpPost("CreateStudent")]
        //public ActionResult<Student> CreateStudent([FromBody] StudentDTO studentDTO)
        //{
        //    if (studentDTO == null)
        //    {
        //        return BadRequest("Student data is null.");
        //    }
        //    var newStudent = new Student()
        //    {
        //        studentID = collegeRepository.students.Max(s => s.studentID) + 1, // Auto-increment ID
        //        name = studentDTO.name,
        //        email = studentDTO.email,
        //        age = studentDTO.age
        //    };

        //    collegeRepository.students.Add(newStudent);
        //    return CreatedAtRoute("getStudentById", new { id = newStudent.studentID }, newStudent);
        //}

        //[HttpPut("UpdateStudent")]
        //public ActionResult UpdateStudent(int id, [FromBody] StudentDTO studentDTO)
        //{
        //    if (studentDTO == null || id == 0)
        //    {
        //        return BadRequest("Invalid data.");
        //    }
        //    var existingStudent = collegeRepository.students.FirstOrDefault(s => s.studentID == id);
        //    if (existingStudent == null)
        //    {
        //        return NotFound($"Student with ID {id} not found.");
        //    }
        //    // Update the existing student's details
        //    existingStudent.name = studentDTO.name;
        //    existingStudent.email = studentDTO.email;
        //    existingStudent.age = studentDTO.age;
        //    return NoContent(); // Standard response for successful PUT requests
        //}

        //[HttpPatch("UpdateSpecific")]
        //public ActionResult UpdateSpecific(int id, [FromBody] JsonPatchDocument<StudentDTO> studentDTO)
        //{
        //    if (studentDTO == null || id == 0)
        //    {
        //        return BadRequest("Invalid data.");
        //    }
        //    var existingStudent = collegeRepository.students.FirstOrDefault(s => s.studentID == id);
        //    if (existingStudent == null)
        //    {
        //        return NotFound($"Student with ID {id} not found.");
        //    }
        //    var studentToPatch = new StudentDTO()
        //    {
        //        //studentID = existingStudent.studentID,
        //        name = existingStudent.name,
        //        email = existingStudent.email,
        //        age = existingStudent.age
        //    };
        //    studentDTO.ApplyTo(studentToPatch, ModelState);
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    // Update the existing student's details
        //    //existingStudent.studentID = studentToPatch.studentID;
        //    existingStudent.name = studentToPatch.name;
        //    existingStudent.email = studentToPatch.email;
        //    existingStudent.age = studentToPatch.age;
        //    return NoContent(); // Standard response for successful PATCH requests
        ////}
        //private readonly collegeDbContext _context;

        //public CollegeApp(collegeDbContext context)
        //{
        //    _context = context;
        ////}

        //[HttpGet("{id:int}", Name = "getstudentbyid")]
        //public async Task<ActionResult<Student>> getstudentbyid(int id)
        //{
        //    if (id == 0)
        //    {
        //        return BadRequest();
        //    }
        //    var student =await _context.Students.Where(n => n.studentID == id).FirstAsync();

        //    if (student == null)
        //    {
        //        return NotFound();
        //    }
        //    var studentWithID = new Student()
        //    {
        //        //studentID = student.studentID,
        //        name = student.name,
        //        email = student.email
        //    };
        //    return Ok(studentWithID);
        //}

        //[HttpGet]
        //public ActionResult<IEnumerable<Student>> get()
        //{s
        //    return Ok(_context.Students);
        //}

        //[HttpPost]

        //public ActionResult<Student> createStudent([FromBody] Student student)
        //{
        //    var newStudent = new Student()
        //    {
        //        name = student.name,
        //        DOB=student.DOB,
        //        Address=student.Address,
        //        email=student.email
        //    };
        //    _context.Students.Add(newStudent);
        //    _context.SaveChanges();

        //    return Ok(newStudent);
        //}

        //[HttpPut]

        //public ActionResult<Student> updateStudent(int id, [FromBody] Student student)
        //{
        //    var existingStudent = _context.Students.Where(s => s.studentID == id).FirstOrDefault();

        //    existingStudent.name = student.name;
        //    existingStudent.DOB = student.DOB;
        //    existingStudent.Address = student.Address;
        //    existingStudent.email = student.email;

        //    _context.SaveChanges();


        //    return (Ok(existingStudent));
        //}

        //[HttpDelete]
        //public ActionResult Delete(int id)
        //{
        //    var toDelete = _context.Students.Where(s => s.studentID == id).FirstOrDefault();
        //    _context.Remove(toDelete);
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //[HttpGet]
        //public ActionResult<Course> getCourse()
        //{
        //    return Ok(_context.Courses);
        //}

        //[HttpPost]

        //public ActionResult<Course> addCourse([FromBody] Course course)
        //{
        //    var newCourse = new Course()
        //    {
        //        Id=course.Id,
        //        subject=course.subject
        //    };
        //    _context.Add(newCourse);
        //    _context.SaveChanges();
        //    return Ok(newCourse);
        //}

        //[HttpPatch]

        //public ActionResult updateCourse(int id)
        //{
        //    var existingCourse = _context.Courses.Where(c => c.Id == id).FirstOrDefault();
        //    Console.WriteLine("Hello World");
        //    existingCourse.subject = "Maths";
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //[HttpDelete]

        //public ActionResult deleteCourse(int id)
        //{
        //    var toDelete=_context.Courses.Where(c=>c.Id==id).FirstOrDefault();
        //    _context.Remove(toDelete);
        //    _context.SaveChanges();
        //    return Ok();
        //}

        //[HttpGet]

        //public async Task<ActionResult<IEnumerable<Student>>> getStudents()
        //{
        //    var students =await _context.Students.ToListAsync();
        //    return Ok(students);
        //}

        private readonly IStudent _IStudent;

        public CollegeApp(IStudent IStudent)
        {
            _IStudent = IStudent;
        }

        [HttpGet("Get")]
        public async Task<IEnumerable<Student>> getAll()
        {
            return await _IStudent.getAll();
        }












    }
}
