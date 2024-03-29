import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  position: fixed;
  background: white;
  width: 400px;
  height: auto;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 24rem;
`;
export const FormTitle = styled.h2`
  margin-top: 2.5rem;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 2.25rem;
  text-align: center;
`;
export const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  flex-direction: column;
`;
export const Label = styled.label`
  display: block;
  color: #111827;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const Input = styled.input`
  display: block;
  padding: 0.375rem 0;
  color: #111827;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #016BFF;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  :hover {
    background-color: #04009A;
  }
`;

export const ChangeFormText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
`;
export const ChangeFormLink = styled.div`
  color: #4f46e5;
  font-weight: 600;
  line-height: 1.5rem;
  margin-left: 0.5rem;
  :hover {
    color: #6366f1;
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;

export const LinkRegister = styled(NavLink)`
color: #016BFF;
:hover {
  color: #6366f1;
}
}
`;
