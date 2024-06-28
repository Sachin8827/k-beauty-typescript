import { Formik, Form } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validationSchema } from "../../validations/SchemaValidations";
import { Place } from '../auth/Address'
import { setAddress } from "../../Redux/UserSlice";
import { Address } from "../../Types/Types";
import Button from '../common/Button'
import { RootState } from "../../Redux/Store";
import { useEffect } from "react";
function TakeAddress() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loaction = useLocation();
  const { user } = useSelector((state: RootState) => state.user)
  const currentValidationStep = validationSchema[2]
  let initialValues: Address = {
    street: user.street,
    city: user.city
  }
  const handleSubmit = (values: Address) => {
    dispatch(setAddress({ values }))

    navigate(-1)
  }

  return <>
    <div className={`container`}  >
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidationStep}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className='form-at-smallscreen'>
            <div className="address">
              <h1 className='signup-heading'>Address</h1>
              <p>Please fill the information below</p>
              <div className='text-add' ><Place street={values.street} city={values.city} />
                <div className='mt-5'>
                  <button
                    type={"submit"}
                    className="submitAddress"
                  >submit</button>
                </div>
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  </>
}

export default TakeAddress