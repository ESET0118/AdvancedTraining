using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace College_App.Models;

[Table("Course")]
[Index("CourseCode", Name = "UQ__Course__FC00E00078AF5262", IsUnique = true)]
public partial class Course
{
    [Key]
    public int CourseId { get; set; }

    [StringLength(20)]
    public string CourseCode { get; set; } = null!;

    [StringLength(100)]
    public string CourseName { get; set; } = null!;

    [StringLength(50)]
    public string? Department { get; set; }

    public int? Semester { get; set; }

    [InverseProperty("Course")]
    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
