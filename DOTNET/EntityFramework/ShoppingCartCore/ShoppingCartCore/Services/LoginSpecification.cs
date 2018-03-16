using LinqKit;
using ShoppingCartCore.Framework.Model;
using ShoppingCartCore.Framework.Repository;
using System;

namespace ShoppingCartCore.Services
{
    public class LoginSpecification : ISpecification<User>
    {
        private LoginCriteria _criteria;

        public LoginSpecification(LoginCriteria criteria)
        {
            _criteria = criteria;
        }

        System.Linq.Expressions.Expression<Func<User, bool>> ISpecification<User>.Expression
        {
            get
            {
                var builder = PredicateBuilder.True<User>();
                if(!string.IsNullOrEmpty(_criteria.UserName) && 
                   string.IsNullOrEmpty(_criteria.Password))
                {
                    builder = builder.And(x => x.Password.ToString().Equals(_criteria.Password))
                                       .And(x => x.Email.ToString().Equals(_criteria.UserName))
                                       .And(x => x.Role.Equals(_criteria.Role));
                }

                if (!string.IsNullOrEmpty(_criteria.UserName) &&
                   !string.IsNullOrEmpty(_criteria.Password))
                {
                    builder = builder.And(x => x.Password.ToUpper().Equals(_criteria.Password.ToUpper()))
                                       .And(x => x.Email.ToUpper().Equals(_criteria.UserName.ToUpper()));
                }

                return builder;
            }
        }
    }
}
