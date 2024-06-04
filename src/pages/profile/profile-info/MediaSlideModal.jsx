import {TwitterLogo} from '../../../components'
import {UploadCoverPhoto, UploadPhoto} from '../../'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import {slide_Array} from '../../../utils/profile-modal.utils'



function MediaSlideModal({ currentSlide, setCurrentSlide, handleModalClose }) {
  const handle_Increment_Slide = () => {
    setCurrentSlide((prev) => prev + 1);
  };


  const handle_Decrement_Slide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  
  return (
    <div className="">
      {/*Logo*/}
      <div className="flex items-center">
        <div className="">
          {currentSlide === 1 && (
            <ArrowBackIcon onClick={handle_Decrement_Slide} />
          )}

          {currentSlide === 2 && <CloseIcon onClick={handleModalClose} />}
        </div>

        <TwitterLogo />
      </div>

      {/* Header */}
      <div className="flex flex-col">
        <span className="">{slide_Array[currentSlide].header.h1}</span>
        <span className="">{slide_Array[currentSlide].header.h2}</span>
      </div>

      {/* Media */}
      <div className="">
        {currentSlide === 0 && <UploadPhoto />}

        {currentSlide === 1 && (
          <UploadCoverPhoto setCurrentSlide={setCurrentSlide} />
        )}
      </div>

      {/* Navigation Button */}
      <div className="">
        {currentSlide < 2 ? (
          <button className="" onClick={handle_Increment_Slide}>
            Skip for now
          </button>
        ) : (
          <button className="">Save</button>
        )}
      </div>
    </div>
  );
}

export default MediaSlideModal