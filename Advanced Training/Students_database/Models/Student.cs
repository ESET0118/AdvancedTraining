using System;
using System.Collections.Generic;

namespace Students_database.Models;

public partial class Student
{
    public int StudentId { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int Dob { get; set; }

    public int Address { get; set; }
}
