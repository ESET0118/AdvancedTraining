﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace College_App.Data
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int studentID { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public int DOB { get; set; }
        public int Address { get; set; }
    }
}
