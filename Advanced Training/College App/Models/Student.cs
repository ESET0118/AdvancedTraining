using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace College_App.Models;

[Table("Student")]
[Index("RollNumber", Name = "UQ__Student__E9F06F1605759C1E", IsUnique = true)]
public partial class Student
{
    [Key]
    public int StudentId { get; set; }

    [StringLength(20)]
    public string RollNumber { get; set; } = null!;

    [StringLength(100)]
    public string Name { get; set; } = null!;

    [StringLength(100)]
    public string? Email { get; set; }

    [StringLength(15)]
    public string? Phone { get; set; }

    [StringLength(200)]
    public string? Address { get; set; }

    public DateOnly? DateOfBirth { get; set; }

    [StringLength(10)]
    public string? Gender { get; set; }

    public int? CourseId { get; set; }

    [ForeignKey("CourseId")]
    [InverseProperty("Students")]

    [JsonIgnore]
    public virtual Course? Course { get; set; }
}
