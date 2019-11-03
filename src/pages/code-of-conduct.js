import React from "react";

import {
  Avatar,
  GradientBackground,
  Layout,
  PageSection
} from "../components/index.js";

import { ORGANIZERS } from "../constants";

export default function() {
  return (
    <Layout>
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">Code of conduct</h2>
        <h4 className="text-h4 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h4>
      </GradientBackground>
      <PageSection title="Short version" className="mt-20">
        <div className="w-11/12 m-auto">
          <p className="text-rg">
            Nuestra conferencia se dedica a ofrecer una experiencia libre de
            abusos para todos, independientemente de su género, orientación
            sexual, discapacidad, apariencia física, talla, raza o religión. No
            toleramos abusos de los participantes de la conferencia en ninguna
            de sus formas. El lenguaje e imágenes sexuales no son apropiados
            para ninguna sala de la conferencia, incluyendo charlas, talleres,
            fiestas, Twitter y otros medios online. Los participantes de la
            conferencia que violen estas reglas pueden ser sancionados o
            expulsados de la misma sin reembolso a discreción de los
            organizadores.
          </p>
        </div>
      </PageSection>
      <PageSection title="Long version">
        <div className="w-11/12 m-auto">
          <p className="text-rg mb-6">
            Los abusos incluyen: comentarios ofensivos relativos a género,
            orientación sexual, discapacidad, apariencia física, talla, raza,
            religión, imágenes sexuales en espacios públicos, intimidación
            deliberada, acoso, persecución, fotografía o grabación de abusos,
            interrupciones continuadas de charlas u otros eventos, contacto
            físico inapropiado y atención sexual no deseada.
          </p>
          <p className="text-rg mb-6">
            Se espera que los participantes instados a parar cualquier
            comportamiento abusivo obedezcan inmediatamente.
          </p>
          <p className="text-rg mb-6">
            Los patrocinadores también están sujetos a la política contra
            abusos. En particular, los patrocinadores no deberían utilizar
            imágenes, actividades u otro material con contenido sexual. El
            personal de los puestos (voluntarios incluidos) no debería usar
            ropa/uniformes/disfraces sexualizados, o que de otra manera crean un
            ambiente sexualizado.
          </p>
          <p className="text-rg mb-6">
            Si un participante incurre en un comportamiento abusivo, los
            organizadores de la conferencia pueden tomar cualquier acción que
            estimen oportuna, incluyendo advertencias al ofensor o su expulsión
            de la conferencia sin reembolso.
          </p>
          <p className="text-rg mb-6">
            Si estás sufriendo algún abuso, adviertes abusos sobre otra persona,
            o tienes alguna otra preocupación, por favor contacta con algún
            miembro del personal de la conferencia inmediatamente. El personal
            de la conferencia puede ser fácilmente identificado, ya que vestirán
            camisetas del evento.
          </p>
          <p className="text-rg mb-6">
            El personal de la conferencia estará contento de ayudar a los
            participates a contactar con la seguridad del hotel/sala o con las
            autoridades locales, proveer escolta o asistir de otra manera a
            aquellos que estén sufriendo abusos para que se sientan seguros
            mientras dure la conferencia. Valoramos tu asistencia.
          </p>
          <p className="text-rg">
            Esperamos que los participantes sigan estas reglas en la la
            conferencia, talleres y eventos sociales relacionados con la
            conferencia.
          </p>
        </div>
      </PageSection>
      <PageSection
        title="Need help?"
        description="Contact one of the organizars through twitter or personally."
      >
        <div className="flex flex-wrap">
          {ORGANIZERS.map((organizer, index) => (
            <Avatar key={index} {...organizer} />
          ))}
        </div>
      </PageSection>
    </Layout>
  );
}
