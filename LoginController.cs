using Microsoft.AspNetCore.Mvc;
using RegisterAndLoginApp1.Models;
using RegisterAndLoginApp1.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegisterAndLoginApp1.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ProcessLogin(Usermodel usermodel)
        {
            SecurityService securityService = new SecurityService();

            if (securityService.IsValid(usermodel))
            {
                return View("LoginSuccess", usermodel);
            }else
            {
                return View("LoginFailure", usermodel);
            }
            
        }
    }
}
