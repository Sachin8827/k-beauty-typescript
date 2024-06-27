import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validationSchema } from "../../Validations/SchemaValidations";
import { Place } from '../auth/Address'
import { setAddress } from "../../Redux/UserSlice";
import { Address } from "../../Types/Types";
import Button from '../Common/Button'
function TakeAddress() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentValidationStep = validationSchema[2]
  let initialValues = {
    street: "",
    city: ""
  }
  const handleSubmit = (values: Address) => {
    dispatch(setAddress({ values }))
    navigate('/summary')
  }
  return <>
    <div className={`container`}  >
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidationStep}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className='form-at-smallscreen'>
            <div className="address">
              <h1 className='signup-heading'>Address</h1>
              <p>Please fill the information below</p>
              <div className='text-add' ><Place />
                <div className='mt-5'>
                  <Button
                    text={"submit"}
                    className="submitAddress"
                  />
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