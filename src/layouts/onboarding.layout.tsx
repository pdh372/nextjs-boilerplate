'use client';

type TOnboardingLayout = {
  children: any,
  top?: string,
  bottom?: string,
  back?: string,
  skip?: string;
  order?: number;
};

const OnboardingLayout = (props: TOnboardingLayout) => {
  console.log(props.top, props.bottom);

  return (
    <div>
      <div>skip</div>
      <div>{props.children}</div>
      <div>
        <button>12</button>
      </div>
    </div>
  );
};

export { OnboardingLayout };
